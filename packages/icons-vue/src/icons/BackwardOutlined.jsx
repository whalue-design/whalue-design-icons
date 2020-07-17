// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BackwardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BackwardOutlined';

export default {
  name: 'IconBackwardOutlined',
  displayName: 'BackwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BackwardOutlinedSvg } },
      children,
    ),
};