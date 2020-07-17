// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloseCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CloseCircleOutlined';

export default {
  name: 'IconCloseCircleOutlined',
  displayName: 'CloseCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloseCircleOutlinedSvg } },
      children,
    ),
};