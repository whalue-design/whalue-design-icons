// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LoadingOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LoadingOutlined';

export default {
  name: 'IconLoadingOutlined',
  displayName: 'LoadingOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LoadingOutlinedSvg } },
      children,
    ),
};