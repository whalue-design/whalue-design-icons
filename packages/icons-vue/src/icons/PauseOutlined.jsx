// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PauseOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PauseOutlined';

export default {
  name: 'IconPauseOutlined',
  displayName: 'PauseOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PauseOutlinedSvg } },
      children,
    ),
};