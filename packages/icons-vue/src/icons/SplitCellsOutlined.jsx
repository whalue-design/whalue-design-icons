// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SplitCellsOutlinedSvg from '@whalue-design/icons-svg/lib/asn/SplitCellsOutlined';

export default {
  name: 'IconSplitCellsOutlined',
  displayName: 'SplitCellsOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SplitCellsOutlinedSvg } },
      children,
    ),
};